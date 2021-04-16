import React from 'react';
import { Box } from '@chakra-ui/react';

export default function Roadmap() {
    return (
        <div className="container">
            <div className="heading" >
                Roadmap to Launch
            </div>

            <Box fontSize={['sm', 'md']}>
                <table className="roadMapTable">
                    <tbody>
                        <tr className="old">
                            <td>APRIL 2021</td>
                            <td> ✓ </td>
                            <td>Introduced Symphony Finance</td>
                        </tr>
                        <tr className="old">
                            <td>MAY 2021</td>
                            <td> ✓ </td>
                            <td>Testnet Launch</td>
                        </tr>
                        <tr className="current">
                            <td style={{ color: '#6a854c' }}>
                                <b>MAY 2021</b>
                            </td>
                            <td></td>
                            <td>
                                <b>Private Sale</b>
                            </td>
                        </tr>
                        <tr className="new">
                            <td>JUL 2021</td>
                            <td> </td>
                            <td>Mainnet Launch</td>
                        </tr>
                        <tr className="new">
                            <td>Qz 202a</td>
                            <td> </td>
                            <td>Multichain Support</td>
                        </tr>
                        <tr className="new">
                            <td>Qb 202c</td>
                            <td> </td>
                            <td>Multiple Adapter Support</td>
                        </tr>
                    </tbody>
                </table>
            </Box>
        </div>
    );
}
