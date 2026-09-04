import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getCategories } from "../../api/Services";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="category-list-wrapper py-2">

            <h5 className="fw-bold text-dark pb-3 border-bottom">
                Categories
            </h5>

            {error && (
                <p className="text-danger">
                    Failed to load categories
                </p>
            )}

            <Nav className="flex-column gap-2">

                {categories.map((category) => (
                    <NavLink
                        key={category.slug}
                        to={`/shop/${category.slug}`}
                        className={({ isActive }) =>
                            `category-link text-decoration-none ${isActive
                                ? "text-primary fw-bold"
                                : "text-secondary"
                            }`
                        }
                    >
                        {category.name}
                    </NavLink>
                ))}

            </Nav>
        </div>
    );
};

export default CategoryList;