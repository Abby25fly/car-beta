
const Result = () => (
    <div className="container">
      <div className="[ col-sm-6 ]">
        <div className="[ info-card ]">
          <img
            style={{ width: "100%" }}
            src="https://rightindem.com/wp-content/themes/HTML5-Reset-WordPress-Theme-master/images/icon-insurer.png"
          />
          <div className="[ info-card-details ] animate">
            <div className="[ info-card-header ]">
              <h1> Robert McIntosh </h1>
              <h3> Tipo de seguro </h3>
            </div>
            <div className="[ info-card-detail ]">
              {/* Description */}
              <p>
                Resultado de los datos procesados. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  


const BtnCall = ()=>(
    <div className="well" id="btnNext">
    
    <Button bsSize="large" block>Llamar</Button>
  </div>

);

const BtnNext = ()=>(
    <div className="well" id="btnNext">
    
    <Button bsSize="large" block>Siguiente</Button>
  </div>

);




