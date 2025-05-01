import React from 'react';

const Display_List = ({ list }) => {
    console.log(list);
    return (
        <>
            <div style={{ color: 'black' }}>
                <table style={{ width: '100%', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            {
                                Object.keys(list[0]).map((key) => (
                                    <th
                                        key={key}
                                        style={{ padding: '10px', textAlign: 'left', background: 'white' }}
                                    >
                                        {key}
                                    </th>
                                ))}
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => (
                            <tr key={index} style={{ backgroundColor: 'white' }}>
                                {
                                    Object.values(item).map((value, id) => (
                                        <td key={id} style={{ padding: '10px' }}>
                                            {value}
                                        </td>
                                    ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};



function HomePage() {
    const list = [
        {
            "name": "iPhone 15 Pro",
            "type": "Smartphone",
            "brand": "Apple",
            "release_year": 2023
        },
        {
            "name": "Galaxy Z Fold5",
            "type": "Foldable Smartphone",
            "brand": "Samsung",
            "release_year": 2023
        },
        {
            "name": "MacBook Air M2",
            "type": "Laptop",
            "brand": "Apple",
            "release_year": 2022
        },
        {
            "name": "Meta Quest 3",
            "type": "VR Headset",
            "brand": "Meta",
            "release_year": 2023
        },
        {
            "name": "Sony WH-1000XM5",
            "type": "Wireless Headphones",
            "brand": "Sony",
            "release_year": 2022
        }
    ]
    return (
        <>
            <h1>This is table about Tech.</h1>
            <div>
                <Display_List list={list} />
            </div>
        </>
    )
}

export default HomePage
