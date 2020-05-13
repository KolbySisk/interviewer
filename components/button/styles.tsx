import styled from '@emotion/styled';

export const Button: any = styled.button({
  background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
  color: 'white',
  border: 'none',
  fontWeight: 900,
  fontSize: 24,
  padding: '20px 40px',
  borderRadius: 50,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
  ':active': {
    background: 'radial-gradient(circle, rgba(63,94,251,1) 20%, rgba(252,70,107,1) 120%)'
  }
});