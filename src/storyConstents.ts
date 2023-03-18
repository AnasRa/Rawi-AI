/** variables
 * story name: short descriptive name
 * story length: very short (75), short (150), normal (250), long (500), very long (1000)
 * characters:
 *              names
 *              traits
 * era: moderne era, islamic golden age, etc...
 * themes: frindship, horror, creativety, etc...
 */

/** exrcises
 * word meanings
 * questins about the story
 * fill the blanks with drag and drop
 * multiple choice
 */

export const CHOICES = {
  LENGTH: {
    VERY_SHORT: 75,
    SHORT: 150,
    NORMAL: 250,
    LONG: 500,
    VERY_LONG: 1000,
  },
  ERA: {
    ICE_AGE: "ice age",
    ISLAMIC: "islamic golden age",
    MODERN: "modern era",
    NEAR_FUTURE: "near future",
    FAR_FUTURE: "far future",
  },
  THEMES: {
    FRIENDSHIP: "friendship",
    COURAGE: "courage",
    IMAGINATION: "imagination",
    PERSEVERANCE: "perseverance",
    RESPONSIBILITY: "responsibility",
    ACCEPTANCE: "acceptance",
    ADVENTURE: "adventure",
    KINDNESS: "kindness",
    TEAMWORK: "teamwork",
    ENVIRONMENT: "environment",
  },
};

export const PROMPTS = {
  STORY:
    "I want you to write a short story in about 200 words for a {{age}} years old, involving the information down below, I'll give you the characters' names and their traits and you'll create a story based on these factors, it will also include other elements or as I call them \"toys\"  and note that you're allowed to change the order if that needed, and I want you to embed the story to fit into the Saudi culture without publicly saying that in the story.\nThe main character is a {{gender}} named {{name}}\nElement list as known as \"toys\"\nnote that these are not in order and you're allowed to reorder them if needed\n{{toys}}\nDisclaimer: every story should happen in Saudi environment, I want you to embed the story to fit into the Saudi culture without publicly saying that in the story, use Saudi cities and landmarks, the main character has a {{character}}",
};
