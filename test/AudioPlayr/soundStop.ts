/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("does not reset the time of a sound that hasn't played yet", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound = AudioPlayer.library[mocks.mockSoundName];

    // Act
    sound.currentTime = 4;
    AudioPlayer.soundStop(sound);

    // Assert
    chai.expect(sound.currentTime).to.equal(4);
});

mochaLoader.addTest("resets the time of a sound (commented out)", (): void => {
    // The readyState always returns 0
    
    /*// Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound = AudioPlayer.library[mocks.mockSoundName];

    // Act
    console.log(sound.readyState);
    AudioPlayer.playSound(sound);
    console.log(sound.readyState);
    AudioPlayer.play(mocks.mockSoundName);
    setTimeout(() => { console.log(sound.readyState);}, 2);
    sound.currentTime = 1;
    AudioPlayer.soundStop(sound);

    // Assert
    chai.expect(sound.currentTime).to.equal(0);*/
});