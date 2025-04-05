interface Word {
  word: string;
  meaning: string;
  imageUrl: string;
}

export const words: Word[] = [
  {
    word: "Serendipity",
    meaning: "The occurrence and development of events by chance in a happy or beneficial way",
    imageUrl: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    word: "Ephemeral",
    meaning: "Lasting for a very short time",
    imageUrl: "https://images.unsplash.com/photo-1487139975590-b4f1dce9b035?auto=format&fit=crop&q=80&w=1000"
  },
  {
    word: "Mellifluous",
    meaning: "Sweet or musical; pleasant to hear",
    imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1000"
  },
  // Add more words as needed
];