import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Button from '@/components/Button';

function Home() {
  return (
    <Layout>
      <Container className="mt-20">

        <h1 className="text-6xl font-black text-center text-slate-900 mb-6">
          Mint memories so people can own their stories
        </h1>
        <div style={{}}>
          <img
            src="https://media.discordapp.net/attachments/1141024031714332843/1236464065585614941/zknadar_A_minimalistic_flat_illustration_of_an_AI_digital_influ_83b8a469-300c-4002-bb9b-9ce11b8c16b8.png?ex=66381a65&is=6636c8e5&hm=47e9f2ece829ac179007c60f675ff426d03c4e9894fa8fe588e1224aae81ba9e&=&format=webp&quality=lossless&width=1008&height=700"
            alt="Memorable Moments"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <p className="text-xl text-center text-slate-900 mb-6">
          Create a drop to share with your friends and users
        </p>
        <p className="text-center">
          <Button href="/create">
            Create new drop
          </Button>
        </p>
      </Container>
    </Layout>
  )
}

export default Home;

