/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("sets the volume to 0 if sounds are muted", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();

    // Act
    AudioPlayer.setMutedOn();
    var sound = AudioPlayer.playLocal(mocks.mockSoundName);

    // Assert
    chai.expect(sound.volume).to.equal(0);
});

mochaLoader.addTest("sets volumeReal to getVolumeLocal (of type number)", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr({
        directory: "Sounds",
        fileTypes: ["mp3"],
        library: {
            "Sounds": [
                "Ringtone"
            ]
        },
        getVolumeLocal: .5,
        ItemsHolder: mocks.mockItemsHoldr()
    });

    // Act
    var sound = AudioPlayer.playLocal(mocks.mockSoundName);

    // Assert
    chai.expect(sound.getAttribute("volumeReal")).to.equal("0.5");
});

mochaLoader.addTest("sets volumeReal to getVolumeLocal (of type function)", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr({
        directory: "Sounds",
        fileTypes: ["mp3"],
        library: {
            "Sounds": [
                "Ringtone"
            ]
        },
        getVolumeLocal: (): number => {
            return .5;
        },
        ItemsHolder: mocks.mockItemsHoldr()
    });

    // Act
    AudioPlayer.setMutedOn();
    var sound = AudioPlayer.playLocal(mocks.mockSoundName);

    // Assert
    chai.expect(sound.getAttribute("volumeReal")).to.equal("0.5");
});