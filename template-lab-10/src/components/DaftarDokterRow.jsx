import React from 'react';
import { Link } from "react-router-dom";

/**
 * Latihan 1:
 * Tambahkan menu pada navbar untuk menampilkan daftar seluruh dokter, 
 * dan implementasikan pagenya hingga menampilkan data seperti pada page daftar pasien
 */
export const DaftarDokterRow = (props) => {
    return (
        <tbody>
            {props.listDokter.map(dokter => {
                return (
                    <tr key={dokter.id}>
                        <td>{dokter.nama}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}