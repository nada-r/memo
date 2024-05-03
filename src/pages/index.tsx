import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Button from '@/components/Button';

function Home() {
  return (
    <Layout>
      <Container className="mt-20">
        <h1 className="text-6xl font-black text-center text-slate-900 mb-6">
          Today is a day to be remembered
        </h1>
        <p className="text-xl text-center  text-slate-900 mb-6">
          Create immutable memories to share with your friends and users
        </p>
        <p className="text-center">
          <Button href="/create">
            Create your badge
          </Button>
        </p>
      </Container>
    </Layout>
  )
}

export default Home;
