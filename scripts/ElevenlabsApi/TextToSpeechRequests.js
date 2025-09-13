import { ElevenlabsRequest } from "./ElevenlabsRequests.js";


export class TextToSpeechRequest extends ElevenlabsRequest {
    voiceId;
    text;
    settings;
    modelId;
    languageCode;
    dialogueMode;
    audioTags;

    constructor(voiceId, text, settings, modelId = "eleven_turbo_v2", languageCode = "en", dialogueMode = false, audioTags = null) {
        super();
        this.voiceId = voiceId;
        this.text = text;
        this.settings = settings;
        this.modelId = modelId;
        this.languageCode = languageCode;
        this.dialogueMode = dialogueMode;
        this.audioTags = audioTags;
    }

    async fetch() {
        let body = {
            "text": this.text,
            "model_id": this.modelId
        };

        // Add language code support for improved output quality (70+ languages in eleven_v3)
        if (this.languageCode && this.languageCode !== "auto") {
            body.language_code = this.languageCode;
        }

        // Add dialogue mode support for eleven_v3 multi-speaker conversations
        if (this.dialogueMode && this.modelId === "eleven_v3") {
            body.dialogue_mode = true;
        }

        // Add audio tags for emotional/expressive control in eleven_v3
        if (this.audioTags && this.modelId === "eleven_v3") {
            body.audio_tags = this.audioTags;
        }

        if (this.settings) {
            let voiceSettings = {
                "stability": this.settings.stability,
                "similarity_boost": this.settings.similarity_boost,
                "style": this.settings.style,
                "use_speaker_boost": this.settings.use_speaker_boost !== false ? "true" : "false"
            };
            // Note: Speed parameter is not supported by ElevenLabs API
            // Use SSML for speed control instead
            body = foundry.utils.mergeObject(body, {
                "voice_settings": voiceSettings
            });
        }

        let response = await this.postData(`text-to-speech/${this.voiceId}`,
            "audio/mpeg", JSON.stringify(body));
        return response;
    }
}

