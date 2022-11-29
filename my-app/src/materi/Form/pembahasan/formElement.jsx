import React from "react";

export default class FormElement extends React.Component {
  state = {
    nama: "",
    jurusan: "",
    jenisKelamin: "",
    alamat: "",
    member: false,
  };
  handleSubmit = (n) => {
    n.preventDefault();
    alert(`Nama : ${this.state.nama}
          Jurusan : ${this.state.jurusan}
          Jenis Kelamin : ${this.state.jenisKelamin}
          Alamat : ${this.state.alamat}
          Member : ${this.state.member ? "YES" : "NO"}`);
    this.setState({
      nama: "",
      jurusan: "",
      jenisKelamin: "",
      alamat: "",
      member: false,
    });
  };

  render() {
    let stylee = { margin: "20% 40%" };
    return (
      // cara pengambilan data seperti di bawah ini merupakan cara mudah namun bukan cara terbaik, nanti akan diajarkan lagi di materi selanjutnya karena ini sebagai latihan dasar
      <div style={stylee}>
        <fieldset>
          <legend>Isi Formulir</legend>
          <form onSubmit={this.handleSubmit}>
            {/* untuk mengeksekusi submit menggunakan onSubmit di tag form dan button harus di dalam form  */}
            <label>
              Nama : <input type="text" name="Nama" onChange={(n) => this.setState({ nama: n.target.value })} value={this.state.nama} />
              {/* untuk merubah isi menggunakan event onChange dengan mengirimkan callback function n yaitu sebagai elemen disini bebas mau ditulis apa saja   dan .target merupakan apa yang dituju dan value merupaakan data yg akan di ubah*/}
            </label>
            <br />
            <label>
              Jurusan :{" "}
              <select onChange={(n) => this.setState({ jurusan: n.target.value })} value={this.state.jurusan}>
                <option value="">Pilih Jurusan</option>
                <option value="Teknik Informatika">Teknik Informatika</option>
                <option value="Sistem Informasi">Sistem Informasi</option>
                <option value="Ilmu Komputer">Ilmu Komputer</option>
              </select>
            </label>
            <br />
            <span>Jenis kelamin : </span> <br />
            <label>laki-laki</label>
            <input type="radio" checked={this.state.jenisKelamin === "laki-laki"} name="jenis" value="laki-laki" onChange={(n) => this.setState({ jenisKelamin: n.target.value })} />
            <label>perempuan</label>
            <input type="radio" checked={this.state.jenisKelamin === "perempuan"} name="jenis" value="perempuan" onChange={(n) => this.setState({ jenisKelamin: n.target.value })} />
            {/* untuk input radio menggunakan checked dan tambahkan === 'nilainya' agar titik nya tidak tertukar */}
            <br />
            <span>alamat</span>
            <br />
            <textarea placeholder="alamat..." onChange={(n) => this.setState({ alamat: n.target.value })} value={this.state.alamat} />
            <br />
            <label>Member </label>
            <input type="checkbox" name="check" checked={this.state.member} onChange={(n) => this.setState({ member: n.target.checked })} />
            {/* untuk chekbox nilai yg diambil bukan value melainkan checked yg di ambil dari data state.member */}
            <br />
            <button type="submit">submit</button>
            {/* button didalm form */}
          </form>
        </fieldset>
      </div>
    );
  }
}
