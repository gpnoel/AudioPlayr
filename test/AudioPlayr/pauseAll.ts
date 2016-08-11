/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("pauses a theme (commented out)", (done): void => {
    // paused is undefined in this version of PhantomJS

    /*// Arrange
    const AudioPlayer: AudioPlayr.IAudioPlayr = mocks.mockAudioPlayr();

    // Act
    AudioPlayer.playTheme(mocks.mockSoundName);
    setTimeout(() => {
        AudioPlayer.pauseAll();

        // Assert
        chai.expect(AudioPlayer.getTheme().paused).to.equal(true);
        done();
    }, 1);*/

    // remove this once the PhantomJS issue is resolved
    done();
});

mochaLoader.addTest("pauses a sound (commented out)", (done): void => {
    // paused is undefined in this version of PhantomJS

    /*// Arrange
    const AudioPlayer: AudioPlayr.IAudioPlayr = mocks.mockAudioPlayr();

    // Act
    const sound: HTMLAudioElement = AudioPlayer.play(mocks.mockSoundName);
    setTimeout(() => {
        AudioPlayer.pauseTheme();

        // Assert
        chai.expect(sound.paused).to.equal(false);
        done();
    }, 1);*/

    // remove this once the PhantomJS issue is resolved
    done();
});