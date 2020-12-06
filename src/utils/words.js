import faker from 'faker/locale/en_GB';

export default function generateWords(n = 10) {
    return new Array(n).fill("").map(_ => faker.random.word().toLowerCase()).join(" ");
}
