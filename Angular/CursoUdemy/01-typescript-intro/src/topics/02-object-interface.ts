interface Character {
    name: string
    hp: number
    skills: string[]
    hometown?: string
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

console.table(strider)



export {}