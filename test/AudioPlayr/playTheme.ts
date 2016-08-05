/// <reference path="../../node_modules/@types/chai/index.d.ts" />
/// <reference path="../../node_modules/@types/mocha/index.d.ts" />
/// <reference path="../../lib/AudioPlayr.d.ts" />
/// <reference path="../utils/MochaLoader.ts" />
/// <reference path="../utils/mocks.ts" />

mochaLoader.addTest("sets the theme", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();

    // Act
    var sound = AudioPlayer.playTheme(mocks.mockSoundName);

    // Assert
    chai.expect(AudioPlayer.sounds[mocks.mockSoundName]).to.deep.equal(sound);
});

mochaLoader.addTest("sets the loop attribute to true", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();

    // Act
    AudioPlayer.playTheme(mocks.mockSoundName);

    // Assert
    chai.expect(AudioPlayer.theme.loop).to.equal(true);
});

mochaLoader.addTest("sets the loop attribute to false", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr();

    // Act
    AudioPlayer.playTheme(mocks.mockSoundName, false);

    // Assert
    chai.expect(AudioPlayer.theme.loop).to.equal(false);
});

mochaLoader.addTest("uses default getter (of type string)", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr({
        directory: "Sounds",
        fileTypes: ["mp3"],
        library: {
            "Sounds": [
                "Ringtone"
            ],
            "Themes": [
                mocks.mockSoundName
            ]
        },
        getThemeDefault: mocks.mockSoundName,
        ItemsHolder: mocks.mockItemsHoldr()
    });

    // Act
    AudioPlayer.playTheme();

    // Assert
    chai.expect(AudioPlayer.themeName).to.equal(mocks.mockSoundName);
});

mochaLoader.addTest("uses default getter (of type function)", (): void => {
    // Arrange
    var AudioPlayer = mocks.mockAudioPlayr({
        directory: "Sounds",
        fileTypes: ["mp3"],
        library: {
            "Sounds": [
                "Ringtone"
            ],
            "Themes": [
                mocks.mockSoundName
            ]
        },
        getThemeDefault: () => {
            return mocks.mockSoundName;
        },
        ItemsHolder: mocks.mockItemsHoldr()
    });

    // Act
    AudioPlayer.playTheme();

    // Assert
    chai.expect(AudioPlayer.themeName).to.equal(mocks.mockSoundName);
});