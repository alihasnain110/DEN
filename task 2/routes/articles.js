const express = require('express')
const Article = require('./../models/article')
const article = require('./../models/article')
const router = express.Router()

router.get('/new',(req, res) => {
    res.render('articles/new',{article: new Article()})
})


router.get('/:slug',async(req,res)=>{
    const article = await Article.findone({slug: req.params.slug})
    if(article===null) res.redirect('/')
    res.render('article/edit',{article:article})


})
router.post('/',(req, res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try{
       article = awaitarticle.save()
       res.redirect(`/articles/${article.slug}`)
     }catch(e){
        res.render('articles/new',{article:article })
     }
})


module.exports = router