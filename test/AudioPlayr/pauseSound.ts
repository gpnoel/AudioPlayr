/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("pauses the requested sound (commented out)", (): void => {
    // paused is undefined with current version of PhantomJS
    
    /*// Arrange
    const AudioPlayer = mocks.mockAudioPlayr();

    // Act
    const sound = AudioPlayer.play(mocks.mockSoundName);
    AudioPlayer.pauseSound(sound);

    // Assert
    chai.expect(sound.paused).to.equal(true);*/
});