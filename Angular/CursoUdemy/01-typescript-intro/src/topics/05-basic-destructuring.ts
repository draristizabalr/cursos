// interface AudioPlayer {
//     audioVolumen: number;
//     songDuration: number;
//     song: string;
//     details: Details;
// }

// interface Details {
//     author: string;
//     year: number;
// }

// const audioPlayer: AudioPlayer = {
//     audioVolumen: 90,
//     songDuration: 36,
//     song: "Mess",
//     details: {
//         author: 'Ed Sheeran',
//         year: 2015
//     }
// }

// // const { song, details: { author } } = audioPlayer;

// const { song, details } = audioPlayer
// const { author } = details

// console.log({ author })
// console.log({ song })

const dbz: string[] = [ 'Goku', 'Vegeta', 'Trunks'];

const [, , trunks] = dbz

console.error('Personaje 3:', trunks || 'No hay personaje')

export {}