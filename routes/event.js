var express = require('express');
var router = express.Router();

var Event = require('../models/event');

router.get('/',function(req,res,next){
	Event.findAll().then( data=>{
		res.json({
			status:true,
			pesan:"Berhasil Tampil",
			data:data
		});
	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal tampil: " + err.message,
			data:[]
		});
	});
});

router.post('/',function(req,res,next){

    Event.create(req.body).then( data=>{
        res.json({
            status:true,
            pesan:"Berhasil Tambah",
            data:data
        });
    }).catch( err=>{
        res.json({
            status: false,
            pesan: "Gagal Tambah: " + err.message,
            data:[]
        });
    });

});

router.put('/',function(req,res,next){
	Event.update(req.body,{
		where:{id:req.body.id}
	}).then( ()=>{
		res.json({
			status:true,
			pesan:"Berhasil Ubah",
			data:[]
		});
	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal Ubah: " + err.message,
			data:[]
		});
	});
});

router.delete('/',function(req,res,next){
	Event.destroy({
		where:{id:req.body.id}
	}).then( ()=>{
		res.json({
			status:true,
			pesan:"Berhasil Hapus",
			data:[]
		});
	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal Hapus: " + err.message,
			data:[]
		});
	});
});

module.exports = router;