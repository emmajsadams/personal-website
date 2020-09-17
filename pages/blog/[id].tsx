import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from 'react-bootstrap/Container';

// todo: refactor this page to use reactbootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//import styles from '../styles/Home.module.css'

// todo: create app wide head element and page specific head element with different keys
export default function Blog() {
  const router = useRouter()
  const { id } = router.query

  return <p>blog {id}</p>
}
