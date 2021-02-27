import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className='homeIcon'>
        </div>
          <svg width="104" height="14" viewBox="0 0 104 14"><g id="Symbols" stroke="pone" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-135.000000, -17.000000)" fill="currentColor"><g><g transform="translate(135.000000, 17.000000)"><g><path d="M42.84,13.6453333 L42.84,0.205333333 C42.84,0.112 42.7643243,0.0373333333 42.6697297,0.0373333333 L40.2102703,0.0373333333 C40.1156757,0.0373333333 40.04,0.112 40.04,0.205333333 L40.04,13.6453333 C40.04,13.7386667 40.1156757,13.8133333 40.2102703,13.8133333 L42.6697297,13.8133333 C42.7643243,13.8133333 42.84,13.7386667 42.84,13.6453333 Z"></path><path d="M13.776,0.0373333333 L0.336,0.0373333333 C0.242666667,0.0373333333 0.168,0.112 0.168,0.205333333 L0.168,13.6453333 C0.168,13.7386667 0.242666667,13.8133333 0.336,13.8133333 L2.744,13.8133333 C2.83733333,13.8133333 2.912,13.7386667 2.912,13.6453333 L2.912,8.47466667 C2.912,8.38133333 2.98666667,8.30666667 3.08,8.30666667 L11.032,8.30666667 C11.1253333,8.30666667 11.2,8.232 11.2,8.13866667 L11.2,5.712 C11.2,5.61866667 11.1253333,5.544 11.032,5.544 L3.08,5.544 C2.98666667,5.544 2.912,5.46933333 2.912,5.376 L2.912,2.94933333 C2.912,2.856 2.98666667,2.78133333 3.08,2.78133333 L13.776,2.78133333 C13.8693333,2.78133333 13.944,2.70666667 13.944,2.61333333 L13.944,0.205333333 C13.944,0.112 13.8693333,0.0373333333 13.776,0.0373333333 Z"></path><path d="M63.392,0.0186666667 L56.8026667,0.0186666667 C56.7093333,0.0186666667 56.6346667,0.0933333333 56.6346667,0.186666667 L56.6346667,13.6266667 C56.6346667,13.72 56.7093333,13.7946667 56.8026667,13.7946667 L63.5226667,13.7946667 C67.3866667,13.7946667 70.5226667,10.6026667 70.4106667,6.70133333 C70.336,2.968 67.144,0.0186666667 63.392,0.0186666667 Z M63.728,11.0506667 L59.5653333,11.0506667 C59.472,11.0506667 59.3973333,10.976 59.3973333,10.8826667 L59.3973333,2.94933333 C59.3973333,2.856 59.472,2.78133333 59.5653333,2.78133333 L63.5413333,2.78133333 C66.4346667,2.78133333 68.656,5.78666667 67.2373333,8.848 C66.6773333,10.0613333 65.0906667,11.0506667 63.728,11.0506667 Z"></path><path d="M29.792,8.47466667 C29.7173333,8.38133333 29.7733333,8.232 29.904,8.21333333 C30.6506667,8.064 31.3226667,7.728 31.864,7.24266667 C31.8826667,7.224 31.9013333,7.20533333 31.92,7.20533333 C32.088,7.03733333 32.256,6.86933333 32.4053333,6.68266667 C32.424,6.64533333 32.4613333,6.608 32.48,6.57066667 C32.5173333,6.51466667 32.5546667,6.45866667 32.592,6.40266667 C32.6106667,6.36533333 32.648,6.328 32.6666667,6.29066667 C32.704,6.216 32.7786667,6.08533333 32.816,6.01066667 C32.8533333,5.95466667 32.872,5.89866667 32.8906667,5.84266667 C32.9093333,5.78666667 32.9466667,5.712 32.9653333,5.656 C32.984,5.6 33.0026667,5.544 33.0213333,5.488 C33.04,5.45066667 33.04,5.41333333 33.0586667,5.376 C33.096,5.264 33.1146667,5.152 33.152,5.04 C33.152,5.02133333 33.1706667,4.984 33.1706667,4.96533333 C33.1893333,4.872 33.208,4.77866667 33.208,4.68533333 C33.208,4.648 33.2266667,4.61066667 33.2266667,4.57333333 C33.2453333,4.44266667 33.2453333,4.33066667 33.2453333,4.2 C33.2453333,4.06933333 33.2453333,3.93866667 33.2266667,3.82666667 C33.2266667,3.78933333 33.2266667,3.752 33.208,3.71466667 C33.1893333,3.62133333 33.1893333,3.528 33.1706667,3.43466667 C33.1706667,3.416 33.1706667,3.37866667 33.152,3.36 C33.1333333,3.248 33.096,3.136 33.0586667,3.024 C33.04,2.98666667 33.04,2.94933333 33.0213333,2.912 C33.0026667,2.856 32.984,2.8 32.9653333,2.744 C32.9466667,2.688 32.9093333,2.61333333 32.8906667,2.55733333 C32.872,2.50133333 32.8346667,2.44533333 32.816,2.38933333 C32.7786667,2.31466667 32.704,2.184 32.6666667,2.10933333 C32.648,2.072 32.6293333,2.03466667 32.592,1.99733333 C32.5546667,1.94133333 32.5173333,1.88533333 32.48,1.82933333 C32.4613333,1.792 32.424,1.75466667 32.4053333,1.71733333 C32.256,1.53066667 32.1066667,1.344 31.92,1.19466667 C31.9013333,1.176 31.8826667,1.15733333 31.864,1.15733333 C31.136,0.504 30.1653333,0.112 29.12,0.112 L19.6373333,0.112 C19.544,0.112 19.4693333,0.186666667 19.4693333,0.28 L19.4693333,13.72 C19.4693333,13.8133333 19.544,13.888 19.6373333,13.888 L22.064,13.888 C22.1573333,13.888 22.232,13.8133333 22.232,13.72 L22.232,8.54933333 C22.232,8.456 22.3066667,8.38133333 22.4,8.38133333 L26.32,8.38133333 C26.376,8.38133333 26.432,8.4 26.4506667,8.456 L30.4266667,13.832 C30.464,13.8693333 30.5013333,13.9066667 30.5573333,13.9066667 L33.0586667,13.9066667 C33.1893333,13.9066667 33.264,13.7573333 33.208,13.6453333 L29.792,8.47466667 Z M29.12,5.544 L22.4,5.544 C22.3066667,5.544 22.232,5.46933333 22.232,5.376 L22.232,2.94933333 C22.232,2.856 22.3066667,2.78133333 22.4,2.78133333 L29.3066667,2.78133333 C29.6613333,2.78133333 29.9973333,2.94933333 30.2026667,3.248 C30.9493333,4.34933333 30.1653333,5.544 29.12,5.544 Z"></path><ellipse cx="49.7466667" cy="4.18133333" rx="1.4" ry="1.4"></ellipse><ellipse cx="49.7466667" cy="9.688" rx="1.4" ry="1.4"></ellipse><path d="M101.192,0.0746666667 L97.2533333,5.46933333 C97.1786667,5.56266667 97.048,5.56266667 96.992,5.46933333 L93.0346667,0.0933333333 C92.9973333,0.056 92.96,0.0186666667 92.904,0.0186666667 L90.4026667,0.0186666667 C90.272,0.0186666667 90.1973333,0.168 90.2533333,0.28 L95.704,8.26933333 C95.7226667,8.288 95.7413333,8.32533333 95.7413333,8.36266667 L95.7413333,13.6266667 C95.7413333,13.72 95.816,13.7946667 95.9093333,13.7946667 L98.3546667,13.7946667 C98.448,13.7946667 98.5226667,13.72 98.5226667,13.6266667 L98.5226667,8.344 C98.5226667,8.30666667 98.5413333,8.26933333 98.56,8.25066667 L104.010667,0.261333333 C104.085333,0.149333333 104.010667,0 103.861333,0 L101.36,0 C101.266667,0.0186666667 101.210667,0.0373333333 101.192,0.0746666667 Z"></path><path d="M89.6746667,13.552 L82.824,0.112 C82.7866667,0.056 82.7306667,0.0186666667 82.6746667,0.0186666667 L80.2106667,0.0186666667 C80.1546667,0.0186666667 80.08,0.056 80.0613333,0.112 L73.2106667,13.552 C73.1546667,13.664 73.2293333,13.7946667 73.36,13.7946667 L75.8053333,13.7946667 C75.88,13.7946667 75.936,13.7573333 75.9546667,13.7013333 L77.1866667,11.1626667 C77.2053333,11.1066667 77.28,11.0693333 77.336,11.0693333 L85.5306667,11.0693333 C85.6053333,11.0693333 85.6613333,11.1066667 85.68,11.1626667 L86.912,13.7013333 C86.9306667,13.7573333 87.0053333,13.7946667 87.0613333,13.7946667 L89.5066667,13.7946667 C89.656,13.7946667 89.7306667,13.664 89.6746667,13.552 Z M84,8.288 L78.904,8.288 C78.792,8.288 78.6986667,8.15733333 78.7546667,8.04533333 L81.2933333,2.856 C81.3306667,2.78133333 81.3866667,2.76266667 81.4426667,2.76266667 C81.4986667,2.76266667 81.5733333,2.8 81.592,2.856 L84.1306667,8.04533333 C84.2053333,8.15733333 84.112,8.288 84,8.288 Z"></path></g></g></g></g></g></svg>
      </Link>
    </header>
  )
}

export default Header;