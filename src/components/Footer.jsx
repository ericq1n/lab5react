export default function Footer() {
    let thisYear = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {thisYear} CodeCraft Labs. All rights reserved.</p>
        </footer>
    )
}