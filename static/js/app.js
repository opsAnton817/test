// Глобальные переменные
let currentProducts = [];
let currentAnalysis = null;

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    loadStatistics();
    loadProducts();
    
    // Обработчик поиска
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
});

// Загрузка статистики
async function loadStatistics() {
    try {
        const response = await fetch('/api/statistics');
        const data = await response.json();
        displayStatistics(data.statistics);
    } catch (error) {
        console.error('Ошибка загрузки статистики:', error);
    }
}

// Отображение статистики
function displayStatistics(stats) {
    const container = document.getElementById('statisticsContainer');
    
    const statsHTML = `
        <div class="col-md-3 col-sm-6 mb-3">
            <div class="stat-card">
                <div class="stat-icon text-primary">
                    <i class="fas fa-box"></i>
                </div>
                <div class="stat-number">${stats.total_products}</div>
                <div class="stat-label">Всего товаров</div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6 mb-3">
            <div class="stat-card">
                <div class="stat-icon text-danger">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="stat-number">${stats.suspicious_products}</div>
                <div class="stat-label">Подозрительных</div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6 mb-3">
            <div class="stat-card">
                <div class="stat-icon text-warning">
                    <i class="fas fa-gavel"></i>
                </div>
                <div class="stat-number">${stats.total_violations}</div>
                <div class="stat-label">Нарушений</div>
            </div>
        </div>
        <div class="col-md-3 col-sm-6 mb-3">
            <div class="stat-card">
                <div class="stat-icon text-info">
                    <i class="fas fa-search"></i>
                </div>
                <div class="stat-number">${stats.detection_accuracy}%</div>
                <div class="stat-label">Точность</div>
            </div>
        </div>
    `;
    
    container.innerHTML = statsHTML;
}

// Загрузка товаров
async function loadProducts() {
    try {
        const response = await fetch('/api/products');
        const data = await response.json();
        currentProducts = data.products;
        displayProducts(currentProducts);
    } catch (error) {
        console.error('Ошибка загрузки товаров:', error);
    }
}

// Поиск товаров
async function searchProducts() {
    const query = document.getElementById('searchInput').value.trim();
    
    if (!query) {
        loadProducts();
        return;
    }
    
    try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await response.json();
        currentProducts = data.products;
        displayProducts(currentProducts);
    } catch (error) {
        console.error('Ошибка поиска:', error);
    }
}

// Отображение товаров
function displayProducts(products) {
    const container = document.getElementById('productsContainer');
    
    if (products.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-info">
                    <i class="fas fa-info-circle"></i>
                    Товары не найдены
                </div>
            </div>
        `;
        return;
    }
    
    const productsHTML = products.map(product => `
        <div class="col-lg-6 col-md-12 mb-4">
            <div class="product-card">
                <div class="product-card-header">
                    <div class="d-flex justify-content-between align-items-start">
                        <div>
                            <div class="product-name">${product.name}</div>
                            <div class="product-brand">${product.brand}</div>
                            <div class="product-description">${product.description}</div>
                        </div>
                        <div class="text-end">
                            <div class="product-price">${product.price.toLocaleString()}₽</div>
                            <div class="text-muted small">${product.seller}</div>
                        </div>
                    </div>
                </div>
                <div class="product-card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="badge bg-secondary">${product.category}</span>
                        </div>
                        <button class="btn btn-primary btn-sm" onclick="analyzeProduct(${product.id})">
                            <i class="fas fa-balance-scale"></i>
                            Анализировать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = productsHTML;
}

// Анализ товара
async function analyzeProduct(productId) {
    showLoading();
    
    try {
        const response = await fetch('/api/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product_id: productId })
        });
        
        const data = await response.json();
        currentAnalysis = data;
        
        displayAnalysis(data);
        showAnalysisSection();
        
    } catch (error) {
        console.error('Ошибка анализа:', error);
        hideLoading();
    }
}

// Отображение анализа
function displayAnalysis(data) {
    const { product, legal_analysis } = data;
    
    const analysisHTML = `
        <div class="detailed-analysis fade-in">
            <div class="analysis-header">
                <h4>
                    <i class="fas fa-balance-scale"></i>
                    Анализ товара: ${product.name}
                </h4>
                <span class="analysis-risk-level ${legal_analysis.risk_level}">
                    ${getRiskLevelText(legal_analysis.risk_level)}
                </span>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h6><i class="fas fa-info-circle"></i> Информация о товаре</h6>
                        </div>
                        <div class="card-body">
                            <p><strong>Бренд:</strong> ${product.brand}</p>
                            <p><strong>Цена:</strong> ${product.price.toLocaleString()}₽</p>
                            <p><strong>Продавец:</strong> ${product.seller}</p>
                            <p><strong>Категория:</strong> ${product.category}</p>
                            <p><strong>Описание:</strong> ${product.description}</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h6><i class="fas fa-chart-pie"></i> Статистика анализа</h6>
                        </div>
                        <div class="card-body">
                            <div class="counter-section">
                                <div class="counter-item">
                                    <div class="counter-number">${legal_analysis.violations.length}</div>
                                    <div class="counter-label">Нарушений</div>
                                </div>
                                <div class="counter-item">
                                    <div class="counter-number">${legal_analysis.evidence.length}</div>
                                    <div class="counter-label">Доказательств</div>
                                </div>
                                <div class="counter-item">
                                    <div class="counter-number">${legal_analysis.recommendations.length}</div>
                                    <div class="counter-label">Рекомендаций</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            ${legal_analysis.violations.length > 0 ? `
                <div class="mt-4">
                    <h5><i class="fas fa-exclamation-triangle"></i> Найденные нарушения:</h5>
                    ${legal_analysis.violations.map(violation => `
                        <div class="violation-card ${violation.severity}">
                            <div class="d-flex align-items-start">
                                <div class="violation-icon">${violation.icon || '🚨'}</div>
                                <div class="flex-grow-1">
                                    <div class="violation-title">${violation.description}</div>
                                    ${violation.law ? `
                                        <div class="violation-law">
                                            <strong>Закон:</strong> ${violation.law.name}
                                        </div>
                                        <div class="violation-description">
                                            ${violation.law.description}
                                        </div>
                                        <div class="violation-penalty">
                                            <strong>Санкция:</strong> ${violation.law.penalty}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div class="alert alert-success mt-4">
                    <i class="fas fa-check-circle"></i>
                    Нарушений не обнаружено
                </div>
            `}
            
            ${legal_analysis.evidence.length > 0 ? `
                <div class="evidence-section mt-4">
                    <h5><i class="fas fa-search"></i> Доказательства:</h5>
                    ${legal_analysis.evidence.map(evidence => `
                        <div class="evidence-item">
                            <div class="evidence-description">${evidence.description}</div>
                            <div class="evidence-severity">
                                <span class="badge bg-${getSeverityColor(evidence.severity)}">
                                    ${evidence.severity}
                                </span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            ${legal_analysis.recommendations.length > 0 ? `
                <div class="recommendations-section">
                    <h5><i class="fas fa-lightbulb"></i> Рекомендации:</h5>
                    ${legal_analysis.recommendations.map(rec => `
                        <div class="recommendation-item">
                            <i class="fas fa-arrow-right"></i>
                            ${rec}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            <div class="action-buttons">
                <button class="btn btn-primary" onclick="showDetailedModal()">
                    <i class="fas fa-external-link-alt"></i>
                    Подробный анализ
                </button>
                <button class="btn btn-secondary" onclick="hideAnalysisSection()">
                    <i class="fas fa-times"></i>
                    Закрыть
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('analysisContainer').innerHTML = analysisHTML;
    hideLoading();
}

// Показать модальное окно с детальным анализом
function showDetailedModal() {
    if (!currentAnalysis) return;
    
    const { product, legal_analysis } = currentAnalysis;
    
    const modalContent = `
        <div class="detailed-analysis">
            <div class="analysis-header">
                <h4>
                    <i class="fas fa-balance-scale"></i>
                    Детальный правовой анализ: ${product.name}
                </h4>
                <span class="analysis-risk-level ${legal_analysis.risk_level}">
                    ${getRiskLevelText(legal_analysis.risk_level)}
                </span>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h6><i class="fas fa-info-circle"></i> Информация о товаре</h6>
                        </div>
                        <div class="card-body">
                            <p><strong>Бренд:</strong> ${product.brand}</p>
                            <p><strong>Цена:</strong> ${product.price.toLocaleString()}₽</p>
                            <p><strong>Продавец:</strong> ${product.seller}</p>
                            <p><strong>Категория:</strong> ${product.category}</p>
                            <p><strong>Описание:</strong> ${product.description}</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            <h6><i class="fas fa-chart-pie"></i> Статистика анализа</h6>
                        </div>
                        <div class="card-body">
                            <div class="counter-section">
                                <div class="counter-item">
                                    <div class="counter-number">${legal_analysis.violations.length}</div>
                                    <div class="counter-label">Нарушений</div>
                                </div>
                                <div class="counter-item">
                                    <div class="counter-number">${legal_analysis.evidence.length}</div>
                                    <div class="counter-label">Доказательств</div>
                                </div>
                                <div class="counter-item">
                                    <div class="counter-number">${legal_analysis.recommendations.length}</div>
                                    <div class="counter-label">Рекомендаций</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            ${legal_analysis.violations.length > 0 ? `
                <div class="mt-4">
                    <h5><i class="fas fa-exclamation-triangle"></i> Найденные нарушения:</h5>
                    ${legal_analysis.violations.map(violation => `
                        <div class="violation-card ${violation.severity}">
                            <div class="d-flex align-items-start">
                                <div class="violation-icon">${violation.icon || '🚨'}</div>
                                <div class="flex-grow-1">
                                    <div class="violation-title">${violation.description}</div>
                                    ${violation.law ? `
                                        <div class="violation-law">
                                            <strong>Закон:</strong> ${violation.law.name}
                                        </div>
                                        <div class="violation-description">
                                            ${violation.law.description}
                                        </div>
                                        <div class="violation-penalty">
                                            <strong>Санкция:</strong> ${violation.law.penalty}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div class="alert alert-success mt-4">
                    <i class="fas fa-check-circle"></i>
                    Нарушений не обнаружено
                </div>
            `}
            
            ${legal_analysis.evidence.length > 0 ? `
                <div class="evidence-section mt-4">
                    <h5><i class="fas fa-search"></i> Доказательства:</h5>
                    ${legal_analysis.evidence.map(evidence => `
                        <div class="evidence-item">
                            <div class="evidence-description">${evidence.description}</div>
                            <div class="evidence-severity">
                                <span class="badge bg-${getSeverityColor(evidence.severity)}">
                                    ${evidence.severity}
                                </span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            
            ${legal_analysis.recommendations.length > 0 ? `
                <div class="recommendations-section">
                    <h5><i class="fas fa-lightbulb"></i> Рекомендации:</h5>
                    ${legal_analysis.recommendations.map(rec => `
                        <div class="recommendation-item">
                            <i class="fas fa-arrow-right"></i>
                            ${rec}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
    
    document.getElementById('modalAnalysisContent').innerHTML = modalContent;
    
    const modal = new bootstrap.Modal(document.getElementById('analysisModal'));
    modal.show();
}

// Вспомогательные функции
function getRiskLevelText(level) {
    const levels = {
        'high': 'Высокий риск',
        'medium': 'Средний риск',
        'low': 'Низкий риск',
        'safe': 'Безопасно'
    };
    return levels[level] || level;
}

function getSeverityColor(severity) {
    const colors = {
        'high': 'danger',
        'medium': 'warning',
        'low': 'info'
    };
    return colors[severity] || 'secondary';
}

function showAnalysisSection() {
    document.getElementById('analysisSection').style.display = 'block';
    document.getElementById('analysisSection').scrollIntoView({ behavior: 'smooth' });
}

function hideAnalysisSection() {
    document.getElementById('analysisSection').style.display = 'none';
}

function showLoading() {
    const loadingHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
            <p class="mt-3">Анализируем товар...</p>
        </div>
    `;
    document.getElementById('analysisContainer').innerHTML = loadingHTML;
}

function hideLoading() {
    // Загрузка скрывается в displayAnalysis
}