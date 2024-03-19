import Layout from "@/components/Layout";
import HeaderComponent from "@/components/Header";
import NewsLayout from "@/components/ArtLayout";
import NewsCards from "@/components/Cards";

const APIKEY = //YOURAPIKEYHERE;
export async function getStaticProps() {

    const req = await fetch(`https://newsdata.io/api/1/news?apikey=${APIKEY}&q=NASA&language=en&category=science`)
    const news = await req.json();

    return {
        props: { news: news.results }
    }
}   

export default function Home({news}) {

    return (
        <Layout>
            <HeaderComponent />
            <ul>
                <NewsLayout>
                {news.map((article) => (
                    <li key={article.article_id}>
                    <NewsCards
                        article={article}
                        id={article.article_id}
                        title={article.title}
                        imgSrc={article.image_url}
                        href={`/category/world/${article.article_id}`}
                        desc={article.description}
                    ></NewsCards>
                    </li>
                ))}
                </NewsLayout>
            </ul>
        </Layout>
    );
}