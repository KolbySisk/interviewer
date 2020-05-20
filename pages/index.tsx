import Head from 'next/head';
import Button from '../components/button';
import Modal from '../components/modal';
import { useState } from 'react';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Head>
        <title>Interview Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button callback={() => setShowModal(true)}>Click me</Button>
        {showModal && (
          <Modal title="My sweet modal" onClose={() => setShowModal(false)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            gravida nibh. Phasellus molestie, enim ut interdum faucibus, tellus
            magna convallis magna, a fermentum justo erat quis felis. Nunc quis
            viverra lorem. Vestibulum purus ante, tristique et hendrerit non,
            posuere ac metus. Curabitur commodo, urna et maximus efficitur,
            dolor libero consequat dolor, quis scelerisque risus lectus in
            ligula. Aenean venenatis, odio a ultricies dignissim, dui neque
            ornare massa, vel congue diam nunc in purus. Duis bibendum nibh
            vitae ex consequat, ut pellentesque ligula iaculis. Mauris eget
            sagittis odio, id ultricies lorem. Mauris id porttitor neque, eu
            porta ligula. Aliquam in ante laoreet, placerat ante et, lacinia
            arcu. Phasellus facilisis porttitor libero, non consequat ligula
            sollicitudin hendrerit.
          </Modal>
        )}
      </main>
    </>
  );
};

export default Home;
