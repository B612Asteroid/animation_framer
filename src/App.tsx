import styled from "styled-components";
import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238));
  flex-direction: column;
`;

const Svg = styled.svg`
  width: 100px;
  height: 100px;
  color: red;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const boxVarient = {
    invisible: {
        x: 500,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 1
        }
    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1
        }

    },
    exit: {
        x: -500,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 1,
        }
    }
}

function App() {
    const [visible, setVisible] = useState(1);
    const nextPlease = () => setVisible(prev => prev === 7 ? 7 : prev + 1)
    const prevPlease = () => setVisible(prev => prev === 1 ? 1 : prev - 1)
    return (
        <Wrapper>
            <AnimatePresence>
                {[1, 2, 3, 4, 5, 6, 7].map(i =>
                    i === visible
                        ? <Box
                            key={i}
                            variants={boxVarient}
                            initial="invisible"
                            animate="visible"
                            exit="exit"
                        >
                            {i}
                        </Box>
                        : null)
                }
            </AnimatePresence>
            <button onClick={prevPlease}>prev</button>
            <button onClick={nextPlease}>next</button>
        </Wrapper>
    );
}

export default App;