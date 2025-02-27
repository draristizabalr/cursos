interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

// const { song, songDuration, details } = audioPlayer;
// const { author } = details;

// console.log({ song });
// console.log({ songDuration });
// console.log({ author });

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, trunks = 'Not found' ] = dbz;

console.log('Personaje 3:', trunks);

export {};