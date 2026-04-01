function MTTCard({lang}){
  const[hovered,setHovered]=useState(false);
  const[tagHover,setTagHover]=useState(null);

  const tooltip=lang==='es'
    ?'LSPALearn es una plataforma de aprendizaje movil adaptativa desarrollada por Madison Thomas Technologies. Extiende el salon de clases de LSPA al hogar — con alfabetizacion, codificacion e inteligencia artificial desde los tres anos.'
    :'LSPALearn is a personalized, pace-adaptive mobile learning platform built by Madison Thomas Technologies. It extends LSPA\'s classroom into every home — delivering literacy, coding, and AI foundations starting at age three. Launching soon.';

  const tags=[
    {
      label:'Adaptive Learning',
      labelEs:'Aprendizaje Adaptativo',
      tip:lang==='es'
        ?'La aplicacion esta disenada para adaptarse al ritmo individual de cada nino. Ningun nino es apresurado. Ningun nino es detenido. Los estandares estan alineados con NJBOE, TBOE y OOEC.'
        :'The application adapts to each child\'s individual pace. No child is rushed past understanding. No child is held back from advancing. Standards are aligned with NJBOE, TBOE, and OOEC frameworks.',
    },
    {
      label:'AI Literacy',
      labelEs:'Alfabetizacion en IA',
      tip:lang==='es'
        ?'Queremos que los ninos aprendan lo que impulsa todo esto: IA y codificacion. No como una materia electiva. No como una opcion futura. Como una alfabetizacion fundamental, comenzando desde el nivel preescolar.'
        :'We want children to learn what fuels all of this — AI and coding. Not as an elective. Not as a future option. As a foundational literacy, beginning at the preschool level.',
    },
    {
      label:'Coding Foundations',
      labelEs:'Fundamentos de Codificacion',
      tip:lang==='es'
        ?'La codificacion no solo ensena una habilidad. Le ensena al nino que las herramientas que impulsan el mundo no son fijas — que pueden entenderse, modificarse y crearse.'
        :'Coding does not just teach a child a skill. It teaches them that the tools driving the world around them are not fixed — that they can be understood, modified, and created.',
    },
  ];

  return(
    <div
      className='mb-5 rounded-2xl overflow-hidden'
      style={{position:'relative',border:'1px solid rgba(27,45,91,0.15)',boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>{setHovered(false);setTagHover(null);}}
    >
      {hovered&&tagHover===null&&(
        <div style={{position:'absolute',bottom:'calc(100% + 10px)',left:'50%',transform:'translateX(-50%)',zIndex:100,width:320,background:'#0F1E3D',borderRadius:14,padding:'1rem 1.25rem',boxShadow:'0 16px 40px rgba(0,0,0,0.3)',border:'1px solid rgba(75,163,227,0.2)',pointerEvents:'none'}}>
          <div style={{height:3,background:'linear-gradient(90deg,#1B2D5B,#4BA3E3,#C9A84C)',borderRadius:99,marginBottom:'0.75rem'}}/>
          <p style={{fontFamily:'DM Sans',fontSize:'0.82rem',color:'rgba(255,255,255,0.82)',lineHeight:1.7,margin:0}}>{tooltip}</p>
          <div style={{position:'absolute',bottom:-7,left:'50%',transform:'translateX(-50%)',width:14,height:14,background:'#0F1E3D',border:'1px solid rgba(75,163,227,0.2)',borderTop:'none',borderLeft:'none',rotate:'45deg'}}/>
        </div>
      )}
      <div style={{background:'linear-gradient(135deg,#0F1E3D 0%,#1B2D5B 60%,#1B4A6B 100%)',padding:'1rem 1.5rem 0.75rem',borderBottom:'1px solid rgba(75,163,227,0.15)'}}>
        <h2 className='font-bold text-lg flex items-center gap-2' style={{fontFamily:'Fredoka',color:'#FFFFFF',margin:0}}>
          <span className='text-2xl'>&#x1F4F1;</span>
          {lang==='es'?'Plataforma Digital — MTT':'Digital Learning Platform — MTT'}
        </h2>
      </div>
      <div style={{background:'linear-gradient(135deg,#0F1E3D,#1B2D5B)',padding:'1.5rem'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'1.5rem 1rem',borderRadius:20,border:'1px dashed rgba(75,163,227,0.25)',background:'rgba(255,255,255,0.03)',position:'relative',overflow:'visible'}}>
          <div style={{position:'absolute',top:-40,right:-40,width:160,height:160,borderRadius:'50%',background:'radial-gradient(circle,rgba(201,168,76,0.08),transparent 70%)',pointerEvents:'none'}}/>
          <div style={{position:'absolute',bottom:-40,left:-40,width:160,height:160,borderRadius:'50%',background:'radial-gradient(circle,rgba(75,163,227,0.08),transparent 70%)',pointerEvents:'none'}}/>
          <div style={{width:60,height:60,borderRadius:'50%',background:'linear-gradient(135deg,#1B2D5B,#1B4A6B)',border:'2px solid rgba(201,168,76,0.4)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.75rem',marginBottom:'1rem',boxShadow:'0 8px 24px rgba(0,0,0,0.3)'}}>
            &#x1F9E0;
          </div>
          <div style={{display:'inline-flex',alignItems:'center',gap:6,background:'rgba(201,168,76,0.12)',border:'1px solid rgba(201,168,76,0.3)',borderRadius:999,padding:'4px 16px',marginBottom:'0.85rem'}}>
            <div style={{width:6,height:6,borderRadius:'50%',background:'#C9A84C'}}/>
            <span style={{fontFamily:'DM Sans',fontSize:'0.68rem',fontWeight:700,letterSpacing:'2.5px',textTransform:'uppercase',color:'#C9A84C'}}>
              {lang==='es'?'EN DESARROLLO':'IN DEVELOPMENT'}
            </span>
          </div>
          <div style={{fontFamily:'Fredoka',fontSize:'1.4rem',fontWeight:700,color:'#FFFFFF',marginBottom:'0.4rem',letterSpacing:0.3}}>
            LSPALearn
          </div>
          <div style={{fontFamily:'DM Sans',fontSize:'0.82rem',color:'rgba(255,255,255,0.5)',marginBottom:'1.25rem',maxWidth:320,lineHeight:1.6}}>
            {lang==='es'
              ?'Powered by Madison Thomas Technologies — aprendizaje adaptativo, codificacion e IA para la proxima generacion de Trenton.'
              :'Powered by Madison Thomas Technologies — adaptive learning, coding, and AI literacy for Trenton\'s next generation.'}
          </div>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',justifyContent:'center'}}>
            {tags.map((tag,i)=>(
              <div key={i} style={{position:'relative'}}>
                {tagHover===i&&(
                  <div style={{position:'absolute',bottom:'calc(100% + 10px)',left:'50%',transform:'translateX(-50%)',zIndex:200,width:280,background:'#0F1E3D',borderRadius:14,padding:'0.85rem 1rem',boxShadow:'0 16px 40px rgba(0,0,0,0.4)',border:'1px solid rgba(201,168,76,0.25)',pointerEvents:'none'}}>
                    <div style={{height:2,background:'linear-gradient(90deg,#C9A84C,#4BA3E3)',borderRadius:99,marginBottom:'0.6rem'}}/>
                    <div style={{fontFamily:'Fredoka',fontSize:'0.85rem',fontWeight:700,color:'#C9A84C',marginBottom:'0.35rem'}}>{lang==='es'?tag.labelEs:tag.label}</div>
                    <p style={{fontFamily:'DM Sans',fontSize:'0.78rem',color:'rgba(255,255,255,0.8)',lineHeight:1.65,margin:0}}>{tag.tip}</p>
                    <div style={{position:'absolute',bottom:-7,left:'50%',transform:'translateX(-50%)',width:12,height:12,background:'#0F1E3D',border:'1px solid rgba(201,168,76,0.25)',borderTop:'none',borderLeft:'none',rotate:'45deg'}}/>
                  </div>
                )}
                <span
                  onMouseEnter={()=>setTagHover(i)}
                  onMouseLeave={()=>setTagHover(null)}
                  style={{fontFamily:'DM Sans',fontSize:'0.72rem',fontWeight:700,padding:'3px 12px',borderRadius:999,background:tagHover===i?'rgba(201,168,76,0.2)':'rgba(75,163,227,0.1)',border:'1px solid '+(tagHover===i?'rgba(201,168,76,0.4)':'rgba(75,163,227,0.2)'),color:tagHover===i?'#C9A84C':'#4BA3E3',cursor:'default',transition:'all 0.2s'}}>
                  {lang==='es'?tag.labelEs:tag.label}
                </span>
              </div>
            ))}
          </div>
          <div style={{marginTop:'1.25rem',fontFamily:'DM Sans',fontSize:'0.75rem',color:'rgba(255,255,255,0.3)'}}>
            {lang==='es'?'Pasa el cursor para saber mas · madisonthomastechnologies.com':'Hover to learn more · madisonthomastechnologies.com'}
          </div>
        </div>
      </div>
    </div>
  );
}
