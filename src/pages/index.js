import Head from 'next/head'
import styles from '@/styles/Director.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '@/util'


export default function Director() {
  const [activeIndex, setActiveIndex] = useState('0');
  const router = useRouter();

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

  const redirect = (link) => {
    router.push(link);
  }

  return (
    <>
      <Head>
        <title>nbdy-cntrl.dev</title>
        <meta name="description" content="A personal website for Nobody" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <div id={styles.menu} data-active-index={activeIndex}>
          <div id={styles.menuitems}>
            <a className={styles.menuitem} onMouseOver={() => handleMouseOver('0')} onClick={() => redirect('/pg/home')}>Home</a>
            <a className={styles.menuitem} onMouseOver={() => handleMouseOver('1')} onClick={() => redirect('/pg/minecraft')}>Minecraft</a>
            <a className={styles.menuitem} onMouseOver={() => handleMouseOver('2')} onClick={() => redirect('/pg/programming')}>Programming</a>
            <a className={styles.menuitem} onMouseOver={() => handleMouseOver('3')} onClick={() => redirect('/pg/twitch')}>Twitch</a>
          </div>
          <div id={styles.logo}>
            <h1>NBDY-CNTRL</h1>
          </div>
          <div id={styles.bgpattern}></div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('./src/posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('./src/posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}