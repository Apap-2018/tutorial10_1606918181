import React from 'react';

export const FormAddBilling = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Menambahkan Billing Pasien</h2>
            <br/>
            <h4>ID Pasien: {props.pasien.id}</h4>
            <h4>Nama Pasien: {props.pasien.nama}</h4>
            <br/>
            <input type="hidden" name="pasien.id" value={props.pasien.id} />
            <div className="form-group">
                <label>Jumlah Tagihan</label>
                <input type="number" className="form-control" name="jumlahTagihan" defaultValue={!props.pasien.jumlahTagihan ? "" : props.pasien.jumlahTagihan}/>
            </div>
            <div className="form-group">
                <label>Tanggal Tagihan</label>
                <input type="date" className="form-control" name="tanggalTagihan" defaultValue={!props.pasien.tanggalTagihan ? "" : props.pasien.tanggalTagihan}/>
            </div>
            <button className="btn btn-success" value="submit">Submit</button>
        </form>
    )
}