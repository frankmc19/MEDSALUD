var Proveedor = require('../proveedor/proveedor.model');
const proveedorService = {};


proveedorService.listarProveedores = async(req, res) => {
    const proveedor = await Proveedor.find();
    res.json(proveedor);
};

proveedorService.registrarProveedores= async(req, res) => {
    const proveedor = new Proveedor({
        nombre: req.body.nombre,
        email: req.body.email,
        estado : req.body.estado,
        telefono : req.body.telefono,
    });
    await proveedor.save();
    res.json({ status: "Proveedor agregado" });
};


module.exports= proveedorService;
