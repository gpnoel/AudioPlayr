/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

// var done = (num?: any) => { chai.expect(num).to.equal(1); }
mochaLoader.addTest("sets up the callback to be called", (done): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound = AudioPlayer.library[mocks.mockSoundName];
    var num = 0;
    var increase = () => { num += 1; }

    // Act
    AudioPlayer.addEventListener(mocks.mockSoundName, "play", increase);
    // AudioPlayer.playSound(sound);
        AudioPlayer.play(mocks.mockSoundName);


    // Assert
    setTimeout(() => {
        chai.expect(num).to.equal(1);
        done();
    }, 1);
});

mochaLoader.addTest("adds the event to the sound", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();
    var sound = AudioPlayer.library[mocks.mockSoundName];
    var num = 0;
    var increase = () => { num += 1; }

    // Act
    AudioPlayer.addEventListener(mocks.mockSoundName, "loadeddata", increase);

    // Assert
    chai.expect(sound.addedEvents["loadeddata"]).to.deep.equal([increase]);
});