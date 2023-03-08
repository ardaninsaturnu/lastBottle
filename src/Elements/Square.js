const Square = ({children}) => {
  const styles = {
    square: {
      width: '30px',
      height: '30px',
      border: '0.5px solid #000',
    },
  }
  
  return(
    <div className="square" style={styles.square}>
      {children}
    </div>
  )
}

export default Square;
