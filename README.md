# acd-talking-actors (Updated for ElevenLabs API 2025)
Selectable and adjustable voices for FoundryVTT actors through Elevenlabs integration. You can configure voices, finetune them and assign them to your linked actors in FoundryVTT using the voice settings dialog in the scene controls bar.

## New Features (v0.9.0)
- **Eleven v3 Support**: Full support for the new Eleven v3 (alpha) model with multilingual output (70+ languages)
- **Dialogue Mode**: Multi-speaker conversation support for Eleven v3
- **Language Selection**: Choose from 70+ supported languages for improved output quality
- **Enhanced Sound Effects**: New loop parameter for seamless looping sound effects
- **Model Selection**: Choose between Eleven Turbo v2, Flash v2, v3, or legacy Multilingual v2
- **Backward Compatibility**: Maintains support for existing voice configurations

Using the chat command /talk with an actor selected will let the character speak with the configured voice. Alternatively use /talk [VoiceName] to override the configuration and let the character speak with the given voice.

An Elevenlabs subscription is required for the module to work. https://beta.elevenlabs.io/

* This module is a spritual successor to the module "Elevenlabs for Foundry" by Vexthecollector (https://github.com/Vexthecollector/elevenlabs-for-foundry/tree/main).
* This module optionally uses the [Yendors Scene Actors](https://foundryvtt.com/packages/yendors-scene-actors) module if this is installed. If an actor is set to focus in the Scene Actors module, it is used for the voice output and does not need to have a token in the active scene. (From version 0.4)
* This module optionally uses the [Conversation Hud](https://foundryvtt.com/packages/conversation-hud) module if this is installed. If the "Speak As" option is set in the Conversation Hud module, the active conversation participant is used for the voice output and does not need to have a token in the active scene. (From version 0.5)
* Supports read-aloud texts in FoundryVTT journals with an insertable macro (with free voice selection by voice id, actor name or actor id). (From version 0.6)
* Offers the option of playing spoken text repeatedly by clicking a button on the chat messages. The replayed text will be loaded from the history of generated samples in Elevenlabs and thus does not count against the word limit. (From version 0.6)
* Supports entering of text to be read aloud with a button in the token hud (from version 0.8)
* Offers the option to suppres posting the spoken text to the chat (from version 0.8)
* Provides an api to be used by third party modules (from version 0.8)
* Supports generation of sound effects based on textual description from the playlist sidebar (from version 0.8)
