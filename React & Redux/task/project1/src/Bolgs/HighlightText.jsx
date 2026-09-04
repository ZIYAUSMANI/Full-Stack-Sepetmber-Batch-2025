function HighlightText({ text, search }) {
    if (!search) return text;

    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearch})`, 'gi');

    return text.split(regex).map((part, index) => {
        if (part.toLowerCase() === search.toLowerCase()) {
            return <mark key={index}>{part}</mark>;
        }

        return part;
    });
}
export default HighlightText