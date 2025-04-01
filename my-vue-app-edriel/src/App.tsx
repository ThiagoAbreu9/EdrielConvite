import './App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import fotoGabi from './assets/img-gabi.jpeg';

function App() {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  React.useEffect(() => {
    if (cardRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      setPosition({ top: cardRect.bottom + 10, left: cardRect.left + cardRect.width / 2 - 40 });
    }
  }, []);

  const moveButton = () => {
    const newTop = Math.random() * window.innerHeight * 0.8;
    const newLeft = Math.random() * window.innerWidth * 0.8;
    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <div className='absolute'>
      <Card ref={cardRef} sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 500, width: 500}}
          image={fotoGabi}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gabi ( love of my life )
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Quer jantar comigo sábado ? 19:30 no Suysei.
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
      <div style={{ position: 'absolute', top: `${position.top}px`, left: `${position.left}px`, display: 'flex', gap: '10px' }}>
        <Button variant= 'contained' color='error' sx={{marginTop: 2 }} onClick={moveButton}>NÃO BABACA! ( NÃO CLIQUE AQUI )</Button>
      </div>

        
      <Button variant='contained' color='info' sx={{marginRight: 30, marginTop: 3}} 
  onClick={() => window.location.href = 'https://imgbox.com/gRK2g3Jy'}>SIM!</Button>
    </div>
  );
}

export default App;