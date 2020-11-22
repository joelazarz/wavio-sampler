import React, { memo } from 'react';
import { useEffect, useRef, useContext } from 'react';
import LoopPlayback from './LoopPlayback';
import LoopControl from './LoopControl';
// context
import KitContext from '../../context/kit/kitContext';
import LoopContext from '../../context/loop/loopContext';
//
import WaveSurfer from 'wavesurfer.js';
import RegionPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js';
import styled from 'styled-components';

const LoopContainer = styled.div`
  grid-row-start: 5;
  grid-row-end: 6;
  grid-column-start: 3;
  grid-column-end: 14;
  padding-right: 2rem;
  padding-left: 2rem;
`

const LoopStation = memo(() => {
  const kitContext = useContext(KitContext);
  const loopContext = useContext(LoopContext);
  
  const { loopBlob, setLoopBlob } = kitContext;
  const { loopColor, addToLoopBank, calledUpLoop } = loopContext;

  const loopformRef = useRef(null);
  const loopWave = useRef(null);
  
  useEffect(() => {
    if (loopBlob === null) { return };

    loopWave.current = WaveSurfer.create({
      container: loopformRef.current,
      waveColor: 'white',
      progressColor: '#B8D6DA',
      height: 180,
      cursorColor: 'orange',
      cursorWidth: 2,
      hideScrollbar: false,
      autoCenter: false,
      scrollParent: true,
      plugins: [
        RegionPlugin.create({
          slop: 8,
          regions: []
        })
      ]
    });

    if(loopBlob){
      loopWave.current.load(loopBlob);
      loopWave.current.setWaveColor(loopColor);
    } else {
      loopWave.current.load('https://raw.githubusercontent.com/anars/blank-audio/master/250-milliseconds-of-silence.mp3');
    };

    loopWave.current.zoom(1);
    // eslint-disable-next-line
  }, [loopBlob]);

  useEffect(() => {
    if (!loopBlob) { return };
    loopWave.current.setWaveColor(loopColor);
    loopWave.current.setProgressColor(loopColor);
    // eslint-disable-next-line
  }, [loopColor]);

  useEffect(() => {
    if(calledUpLoop === null) { return; };

    let calledLoop = URL.createObjectURL(bufferToWave(calledUpLoop[0], calledUpLoop[0].length));
    loopWave.current.destroy();
    loopWave.current = null;
    setLoopBlob(calledLoop);
    // eslint-disable-next-line
  }, [calledUpLoop])

  const playLoop = () => {
    if (!loopBlob) { return; };
    if(loopWave.current.regions.list['resize']) {
      loopWave.current.play();
      loopWave.current.regions.list['resize'].play();
    };
    loopWave.current.play();
  };
  
  const pauseLoop = () => {
    if (!loopBlob) { return; };
    loopWave.current.playPause();
  };

  const stopLoop = () => {
    if (!loopBlob) { return; };
    loopWave.current.stop();
  };

  const resizeLoop = () => {
    if (!loopBlob) { return; };
    if(loopWave.current.regions.list['resize']) { 
      loopWave.current.regions.list['resize'].remove();
    };

    const region = {
      id: 'resize',
      start: 0,
      end: `${loopWave.current.getDuration() - 0.001}`,
      loop: true,
      color: `rgb(246, 155, 155, 0.4)`
    };

    loopWave.current.addRegion(region);
  };

  // Convert an AudioBuffer to a Blob using WAVE representation
  const bufferToWave = (abuffer, len) => {
    var numOfChan = abuffer.numberOfChannels,
        length = len * numOfChan * 2 + 44,
        buffer = new ArrayBuffer(length),
        view = new DataView(buffer),
        channels = [], i, sample,
        offset = 0,
        pos = 0;

    // write WAVE header
    setUint32(0x46464952);                         // "RIFF"
    setUint32(length - 8);                         // file length - 8
    setUint32(0x45564157);                         // "WAVE"

    setUint32(0x20746d66);                         // "fmt " chunk
    setUint32(16);                                 // length = 16
    setUint16(1);                                  // PCM (uncompressed)
    setUint16(numOfChan);
    setUint32(abuffer.sampleRate);
    setUint32(abuffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
    setUint16(numOfChan * 2);                      // block-align
    setUint16(16);                                 // 16-bit (hardcoded in this demo)

    setUint32(0x61746164);                         // "data" - chunk
    setUint32(length - pos - 4);                   // chunk length

    // write interleaved data
    for(i = 0; i < abuffer.numberOfChannels; i++)
      channels.push(abuffer.getChannelData(i));

    while(pos < length) {
      for(i = 0; i < numOfChan; i++) {                                    // interleave channels
        sample = Math.max(-1, Math.min(1, channels[i][offset]));          // clamp
        sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767)|0;  // scale to 16-bit signed int
        view.setInt16(pos, sample, true);                                 // write 16-bit sample
        pos += 2;
      };
      offset++                                                            // next source sample
    };

    // create Blob
    return new Blob([buffer], {type: "audio/wav"});

    function setUint16(data) {
      view.setUint16(pos, data, true);
      pos += 2;
    };

    function setUint32(data) {
      view.setUint32(pos, data, true);
      pos += 4;
    };
  };

  const clipLoop = () => {
    if (!loopBlob) { return; };
    loopWave.current.stop();
    
    const region = loopWave.current.regions.list['resize'];
    const loopWaveBuffer = loopWave.current.backend.buffer;
    
    if (!region) { return; };
    
    const regionStart = region.start;
    const regionEnd = region.end;
    
    let writableSegment = loopWave.current.backend.ac.createBuffer(
      loopWaveBuffer.numberOfChannels,
      ((regionEnd - regionStart) * loopWaveBuffer.sampleRate),
      loopWaveBuffer.sampleRate
    );

    for (let i = 0; i < loopWaveBuffer.numberOfChannels; i++) {
      let channelData = loopWaveBuffer.getChannelData(i);
      let writableSegmentData = writableSegment.getChannelData(i);
      const newBufferData = channelData.subarray((regionStart * loopWaveBuffer.sampleRate), (regionEnd * loopWaveBuffer.sampleRate));
      if (writableSegmentData.length === newBufferData.length) {
        writableSegmentData.set(newBufferData); // occassionally throws RangeError: Source is too large
      } else {
        let newBufferData = channelData.subarray((regionStart * loopWaveBuffer.sampleRate), (regionEnd * loopWaveBuffer.sampleRate) - 1);
        writableSegmentData.set(newBufferData); 
      };
    };

    // @todo push writable segment to loopBank 
    addToLoopBank(writableSegment);

    let clippedBlobURL = URL.createObjectURL(bufferToWave(writableSegment, writableSegment.length));

    loopWave.current.destroy();
    loopWave.current = null;

    setLoopBlob(clippedBlobURL);
  };

  return (
    <>
    <LoopPlayback
    playLoop={playLoop}
    stopLoop={stopLoop}
    pauseLoop={pauseLoop}
    resizeLoop={resizeLoop}
    clipLoop={clipLoop}
    loopBlob={loopBlob}
    />
    { loopBlob ? <LoopContainer ref={loopformRef} /> : <></> }
    <LoopControl />
    </>
  );
});

export default LoopStation;
