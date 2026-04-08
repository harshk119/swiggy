import { Box, Typography, InputBase, Grid, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../../components/Header/index";
import { useFetchSwiggyData } from "../../hooks/useFetchSwiggyData";
import RestaurantCard from "../../components/RestaurantCard";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useFetchSwiggyData();

  const filteredRestaurants = query 
    ? data.restaurants.filter(r => r.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <>
      <Header />
      <Box
        maxWidth="860px"
        mx="auto"
        pt={6}
        px={2}
      >
        {/* Search Bar */}
        <Box
          display="flex"
          alignItems="center"
          border="1px solid #d4d5d9"
          borderRadius="4px"
          px={2}
          py={1.5}
          mb={5}
        >
          <InputBase
            placeholder="Search for restaurants and food"
            sx={{ flex: 1, fontSize: 16, fontWeight: 500 }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchIcon sx={{ color: "#686b78", cursor: "pointer" }} />
        </Box>

        {/* Dynamic Search States */}
        {isLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="30vh">
            <CircularProgress />
          </Box>
        ) : error ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="30vh">
            <Typography color="error">{error}</Typography>
          </Box>
        ) : (
          <>
            {!query ? (
              <Box>
                <Typography variant="h6" fontWeight={800} color="#3d4152" mb={3} ml={1}>
                  Popular Cuisines
                </Typography>

                <Box 
                  display="flex" 
                  gap={2} 
                  overflow="auto"
                  sx={{
                    pb: 2,
                    "&::-webkit-scrollbar": { height: "6px" },
                    "&::-webkit-scrollbar-track": { background: "transparent" },
                    "&::-webkit-scrollbar-thumb": { background: "transparent", borderRadius: "10px" },
                    "&:hover::-webkit-scrollbar-thumb": { background: "#ccc" }
                  }}
                >
                  {data.categories.map((cat) => (
                    <Box key={cat.id} display="flex" flexDirection="column" alignItems="center" minWidth="90px">
                      <Box
                        component="img"
                        src={cat.image}
                        alt={cat.title}
                        sx={{ width: 72, height: 72, objectFit: "cover", borderRadius: "50%", mb: 1, cursor: "pointer" }}
                      />
                      
                    </Box>
                  ))}
                </Box>
              </Box>
            ) : (
              <Box>
                <Typography variant="h6" fontWeight={800} color="#3d4152" mb={3}>
                  Search Results
                </Typography>
                
                {filteredRestaurants.length > 0 ? (
                  <Grid container spacing={4}>
                    {filteredRestaurants.map((res) => (
                      <Grid key={res.id} size={{ xs: 12, sm: 6, md: 4 }}>
                        <RestaurantCard restaurant={res} />
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Typography color="#686b78">
                    No match found for "{query}". Try checking the spelling.
                  </Typography>
                )}
              </Box>
            )}
          </>
        )}
      </Box>
    </>
  );
}
