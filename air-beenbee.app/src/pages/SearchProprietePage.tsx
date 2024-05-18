import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ProprieteCard } from '../components/ProprieteCard';
import type { Propriete } from '../types';
import {
  Button,
  MenuItem,
  Select,
  TextField,
  FormControl,
  InputLabel,
} from '@mui/material';

const SearchProprietePage = () => {
  const { authState } = useAuth();
  const { isAuthenticated } = authState;

  const [proprietes, setProprietes] = useState<Propriete[]>([]);
  const [villes, setVilles] = useState<string[]>([]);
  const [selectedVille, setSelectedVille] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  const getProprietes = async () => {
    try {
      const response = await fetch('http://localhost:3001/');
      if (response.ok) {
        const data = await response.json();
        setProprietes(data);
        setVilles(Array.from(new Set(data.map((p: Propriete) => p.ville))));
      }
    } catch (error) {
      console.error('An error occurred while fetching proprietes:', error);
    }
  };

  useEffect(() => {
    getProprietes();
  }, []);

  const applyFilters = async () => {
    const query = new URLSearchParams();

    if (selectedVille) {
      query.append('ville', selectedVille);
    }

    if (selectedType) {
      query.append('type', selectedType);
    }

    if (minPrice !== null) {
      query.append('minPrice', minPrice.toString());
    }

    if (maxPrice !== null) {
      query.append('maxPrice', maxPrice.toString());
    }

    const queryString = query.toString();
    const endpoint = queryString ? `http://localhost:3001/search?${queryString}` : 'http://localhost:3001/';

    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Failed to fetch properties');
      }
      const data = await response.json();
      setProprietes(data);
    } catch (error) {
      console.error('An error occurred while fetching proprietes:', error);
    }
  };

  return (
    <div>
      <h1>Rechercer une propriété</h1>
      {isAuthenticated ? (
        <div>
          <div className='flex' >
            <FormControl fullWidth>
              <InputLabel id="select-ville-label">Ville</InputLabel>
              <Select
                labelId="select-ville-label"
                value={selectedVille || ''}
                onChange={(e) => setSelectedVille(e.target.value)}
                label="Ville"
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                {villes.map((ville) => (
                  <MenuItem key={ville} value={ville}>
                    {ville}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="select-type-label">Type</InputLabel>
              <Select
                labelId="select-type-label"
                value={selectedType || ''}
                onChange={(e) => setSelectedType(e.target.value)}
                label="Type"
              >
                <MenuItem value="">
                  <em>All</em>
                </MenuItem>
                <MenuItem value="appartement">Appartement</MenuItem>
                <MenuItem value="maison">Maison</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Min Price"
              type="number"
              value={minPrice || ''}
              onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : null)}
              fullWidth
            />
            <TextField
              label="Max Price"
              type="number"
              value={maxPrice || ''}
              onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : null)}
              fullWidth
            />
            <Button variant="contained" onClick={applyFilters}>
              Apply Filters
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 ">
            {proprietes.length !== 0 ? (
              proprietes.map((propriete) => (
                <ProprieteCard key={propriete.id_propriete} propriete={propriete} link />
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </div>
      ) : (
        <p>Vous n'êtes pas connecté</p>
      )}
    </div>
  );
};

export default SearchProprietePage;
