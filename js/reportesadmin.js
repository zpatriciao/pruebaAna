// Ventas por mes (ajustado para veterinaria)
const ventasMesCtx = document.getElementById('ventasMes').getContext('2d');
const ventasMesChart = new Chart(ventasMesCtx, {
  type: 'bar', 
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'], 
    datasets: [{
      label: 'Ventas por mes (en $)',
      data: [5000, 7000, 6000, 8000, 9500], // Ventas por mes
      backgroundColor:['#F96F5D', '#E5E059', '#E1CE7A', '#A9E5BB','#DB5461'] , 
      borderColor: '#F6F4D2', 
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return '$' + tooltipItem.raw;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Servicios solicitados (ajustado para veterinaria)
const serviciosSolicitadosCtx = document.getElementById('serviciosSolicitados').getContext('2d');
const serviciosSolicitadosChart = new Chart(serviciosSolicitadosCtx, {
  type: 'pie',
  data: {
    labels: ['Consultas', 'Vacunación', 'Tratamientos'],
    datasets: [{
      data: [40, 35, 25], // Proporción de servicios solicitados
      backgroundColor: ['#F96F5D', '#E5E059', '#A9E5BB'],
      borderColor: ['#F6F4D2', '#F6F4D2', '#F6F4D2'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
  }
});

// Mejores clientes (ajustado para veterinaria)
const mejoresClientesCtx = document.getElementById('mejoresClientes').getContext('2d');
const mejoresClientesChart = new Chart(mejoresClientesCtx, {
  type: 'line',
  data: {
    labels: ['Juan', 'Paula', 'Camila', 'Sebastian'],
    datasets: [{
      label: 'Mejores Clientes (en $)',
      data: [300, 400, 350, 500], // Gastos de los mejores clientes
      fill: false,
      borderColor: '#BCED09',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
  }
});

// Top productos (ajustado para veterinaria)
const topProductosCtx = document.getElementById('topProductos').getContext('2d');
const topProductosChart = new Chart(topProductosCtx, {
  type: 'bar',
  data: {
    labels: ['Medicamentos', 'Alimentos', 'Accesorios'],
    datasets: [{
      label: 'Top productos (en $)',
      data: [500, 750, 400], // Ventas por categoría de producto
      backgroundColor: '#9B7874',
      borderColor:' #F6F4D2',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
