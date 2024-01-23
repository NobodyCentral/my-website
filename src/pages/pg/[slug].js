import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from "marked";
import styles from '@/styles/Page.module.css'
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head'


export default function PostPage({
  frontmatter: { title, date },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>{title} | nbdy-cntrl.dev</title>
        <meta name="description" content="A personal website for Nobody" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div id={styles.body}>
        <Header pagename={title} />
        <div id={styles.main}>
          <div id={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
          <div id={styles.bgpattern}></div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('./src/posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('./src/posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}