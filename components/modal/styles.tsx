import styled from '@emotion/styled';

export const Overlay: any = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 10,
  backgroundColor: 'rgba(0,0,0,0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Modal: any = styled.div({
  maxWidth: 600,
  backgroundColor: '#232322',
});

export const Header: any = styled.header({
  padding: 16,
  backgroundColor: '#171717',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Title: any = styled.h4({
  color: '#fff',
  fontSize: 18,
  lineHeight: '21px',
  margin: 0,
});

export const Close: any = styled.img({
  color: '#fff',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

export const Body: any = styled.div({
  padding: 16,
  color: '#fff',
  fontSize: 14,
  lineHeight: '16px',
});
