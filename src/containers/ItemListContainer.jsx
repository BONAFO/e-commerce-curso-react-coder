import { Box } from "@mui/material";

import ProductCard from "../components/ProductsList/ProductCard";
import WaitingMsj from "../components/WaitingMsj";
import { useMsjs } from "../context/LoadingMsjContext";
import Spinner from "../components/Spinner";
import { useParams } from "react-router";
import { useRouterCategories } from "../hooks/Products";

import { useCategories } from "../hooks/Categories";
import SidebarFilter from "../components/ProductsList/SidebarFilter";

export default function ItemListContainer({}) {
  const { id } = useParams();

  const { products, spinner } = useRouterCategories({
    isDepend: id,
    ["id"]: id,
  });

  const { categories, spinner: cat_spinner } = useCategories({});

  const { no_games } = useMsjs();

  return (
    <>
      <Spinner loading={cat_spinner && spinner} />
      {Array.isArray(products) && Array.isArray(categories) ? (
        <>
          <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <Box
              sx={{
                flexShrink: 0,
                transition: "width 0.3s ease",
              }}
            >
              <SidebarFilter categories={categories} />
            </Box>

            {products.length > 0 ? (
              <Box
                sx={{
                  flexGrow: 1,
                  p: 3,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  alignItems: "flex-start",
                  minWidth: 0,
                }}
              >
                {products.map((game) => (
                  <ProductCard key={game.id} game={game} />
                ))}
              </Box>
            ) : (
              <Box
                sx={{
                  flexGrow: 1,
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <WaitingMsj waitMsj={no_games} />
              </Box>
            )}
          </Box>
        </>
      ) : (
        ""
      )}
    </>
  );
}
