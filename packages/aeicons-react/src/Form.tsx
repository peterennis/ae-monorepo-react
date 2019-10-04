import React, { useState } from 'react';
import SVGIcon from './SVGIcon';
import './Form.css'
import response from './data';

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [icons, setIcons] = useState([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Call API
    /*
    fetch('', {
        method: 'POST',
        body: JSON.stringify(name)
    }).then(resp => resp.json())
    .then(result => {
      console.log(icons);
      return setIcons(result);
    });
    */

    // Reset form field
    setName('');
    setIcons(response.data);
  }

  const style = {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center',
  }
  
  return (
    <div>
      <h1>AEICONS</h1>
      <div className="Name" style={style}>
        {icons &&
          (icons.map((icon: any, i: any) => {
            const svg = icon.svg;
            return (
              <SVGIcon
                fill={svg.fill}
                height={svg.height}
                key={i}
                path={svg.path}
                width={svg.width}
                viewBox={svg.viewBox}
                xmlns={svg.xmlns}
              />
            )
          }))
        }
      </div>
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
