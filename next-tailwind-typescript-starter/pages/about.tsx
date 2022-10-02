import Link from 'next/link'
import Layout from '../components/Layout'
import { useRouter } from "next/router";


export default function AboutPage (){
  const router = useRouter();
  const query = router.query;
  const username = query.username;

  return (
    <Layout title="About">
    <h1>Hello {username}</h1>
  </Layout>

  )
}
