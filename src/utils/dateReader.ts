

export default function dateReader(date: string) {
    const dateArray = date.split('/');
    return new Date(`${dateArray[1]}/${dateArray[0]}-${dateArray[2]}`)
}