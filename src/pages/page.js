export async function getStaticProps() {

    const req = await fetch(`https://newsdata.io/api/1/news?apikey=pub_40281905fb4cb3373ff0ea7581f4e5bb5a19b&q=NASA&language=en&category=science`)
    const news = await req.json();
    return {
        props: { news }
    }
}   

export default function News({news}) {
    
}