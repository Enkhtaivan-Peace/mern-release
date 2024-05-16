import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
const TypographyPage = () => {
    return (
        <div>
            <Alert>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
            </Alert>
            <h1>TypographyPage:</h1>
            <h2>H2 Title</h2>
            <h3>H3 Title</h3>
            <h4>H4 Title</h4>
            <h5 className="text-emerald-500">H5 Title</h5>

            <p className="text-8 text-blue-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur eum nobis soluta animi?
                Fugit, eos voluptatibus ea fuga recusandae porro quia voluptatem consequuntur corrupti qui, officiis at
                voluptatum quidem?
            </p>
            <p className="text-yellow-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nihil earum iure animi voluptatibus
                voluptate repudiandae dicta, vitae nulla sapiente, odit placeat. Esse voluptates illum pariatur
                provident quisquam eligendi excepturi?
            </p>
            <p className="text-18 text-pink-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero esse earum quibusdam exercitationem,
                est, reiciendis ullam temporibus inventore, harum quisquam necessitatibus amet praesentium saepe fugiat
                placeat recusandae beatae rem? Doloremque!
            </p>
            <p className="text-26 text-rose-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta nobis voluptate sed minus animi aperiam
                architecto aut minima deserunt molestias dolorum maiores, blanditiis quae laborum nesciunt voluptatibus
                suscipit sint voluptatem!
            </p>
            <p className="text-30">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod harum, hic quo nisi sequi consequatur
                officia repellat ducimus praesentium enim illum magni perferendis. Molestiae, consequuntur cupiditate.
                Iure quam corporis temporibus.
            </p>

            <br />
            <p className="popup-text">
                янз бүрийн ялгаатай style бүхий p tag - нууд байж болно. Энэ үед _typography.css дотор тухайн class -
                ийг зарлаж бичнэ.
            </p>

            <h2>.heading класс :</h2>
        </div>
    )
}

export default TypographyPage
