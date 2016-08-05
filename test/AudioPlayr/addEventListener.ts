/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("sets up the callback to be called", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound = AudioPlayer.library[mocks.mockSoundName];
    var num = 0;
    var increase = function () {
        num += 1;
    }

    // Act
    AudioPlayer.addEventListener(mocks.mockSoundName, "play", increase);
    console.log("sound is " + sound);
    console.log("play value was " + AudioPlayer.playSound(sound));

    // Assert
    chai.expect(num).to.equal(1);
});

mochaLoader.addTest("adds the event to the sound", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound = AudioPlayer.library[mocks.mockSoundName];
    var num = 0;
    var increase = function () {
        num += 1;
    }

    // Act
    AudioPlayer.addEventListener(mocks.mockSoundName, "loadeddata", increase);

    // Assert
    chai.expect(sound.addedEvents["loadeddata"]).to.deep.equal([increase]);
});