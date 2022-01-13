import SoundPlayer from "./sound_player";
import SoundPlayerConsumer from "./sound_player_consumer";

jest.mock("./sound_player");

describe("When SoundPlayer throws an error", () => {
  beforeAll(() => {
    SoundPlayer.mockImplementation(() => {
      return {
        playSoundFile: () => {
          throw new Error("Test error");
        },
      };
    });
  });

  it("Should throw an error when calling playSomethingCool", () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(() => soundPlayerConsumer.playSomethingCool()).toThrow();
  });
});
